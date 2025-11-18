package br.com.pg360.api.controller;

import br.com.pg360.api.model.Categoria;
import br.com.pg360.api.repository.CategoriaRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
@Tag(name = "Categorias", description = "Endpoints para gerenciamento de categorias")
@CrossOrigin("http://localhost:5173")

public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    @Operation(
            summary = "Criar nova categoria",
            description = "Adiciona uma nova categoria ao sistema.",
            requestBody = @RequestBody(
                    required = true,
                    content = @Content(schema = @Schema(implementation = Categoria.class))
            )
    )
    @PostMapping
    public ResponseEntity<Categoria> criar(@RequestBody Categoria categoria) {
        return ResponseEntity.status(201).body(repository.save(categoria));
    }

    @Operation(summary = "Listar todas as categorias")
    @GetMapping
    public List<Categoria> listarTodas() {
        return repository.findAll();
    }

    @Operation(summary = "Buscar categoria por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarPorId(@PathVariable Long id) {
        Optional<Categoria> categoria = repository.findById(id);
        return categoria.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Atualizar categoria existente")
    @PutMapping("/{id}")
    public ResponseEntity<Categoria> atualizar(@PathVariable Long id, @RequestBody Categoria nova) {
        return repository.findById(id)
                .map(c -> {
                    c.setNmCategoria(nova.getNmCategoria());
                    c.setDsCategoria(nova.getDsCategoria());
                    return ResponseEntity.ok(repository.save(c));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Deletar categoria")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
