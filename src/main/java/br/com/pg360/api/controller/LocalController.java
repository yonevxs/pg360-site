package br.com.pg360.api.controller;

import br.com.pg360.api.model.Local;
import br.com.pg360.api.repository.LocalRepository;
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
@RequestMapping("/locais")
@Tag(name = "Locais", description = "Endpoints para gerenciamento de locais turísticos")
@CrossOrigin("http://localhost:5173")

public class LocalController {

    @Autowired
    private LocalRepository repository;

    @Operation(
            summary = "Criar novo local",
            description = "Registra um novo local associado a uma categoria existente.",
            requestBody = @RequestBody(
                    required = true,
                    content = @Content(schema = @Schema(implementation = Local.class))
            )
    )
    @PostMapping
    public ResponseEntity<Local> criar(@RequestBody Local local) {
        return ResponseEntity.status(201).body(repository.save(local));
    }

    @Operation(summary = "Listar todos os locais")
    @GetMapping
    public List<Local> listarTodos() {
        return repository.findAll();
    }

    @Operation(summary = "Buscar local por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Local> buscarPorId(@PathVariable Long id) {
        Optional<Local> local = repository.findById(id);
        return local.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Atualizar local existente")
    @PutMapping("/{id}")
    public ResponseEntity<Local> atualizar(@PathVariable Long id, @RequestBody Local novo) {
        return repository.findById(id)
                .map(l -> {
                    l.setNmLocal(novo.getNmLocal());
                    l.setDsLocal(novo.getDsLocal());
                    l.setEndereco(novo.getEndereco());
                    l.setLatitude(novo.getLatitude());
                    l.setLongitude(novo.getLongitude());
                    l.setHrFuncionamento(novo.getHrFuncionamento());
                    l.setCategoria(novo.getCategoria());
                    return ResponseEntity.ok(repository.save(l));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Deletar local")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
